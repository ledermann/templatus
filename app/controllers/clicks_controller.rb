class ClicksController < ApplicationController
  def index
    clicks = Click.order(created_at: :desc).limit(5).to_a
    return unless stale?(clicks, template: false, public: true)

    expires_in 0, must_revalidate: true

    respond_to do |format|
      format.json { render json: { total: Click.count, items: clicks } }
    end
  end

  def create
    click =
      Click.create! user_agent: request.user_agent,
                    ip: anonymize(request.remote_ip)
    ActionCable.server.broadcast 'clicks_channel', click

    head :ok
  end

  private

  def anonymize(ip)
    ip.sub(/\.\d+$/, '.0')
  end
end
