class Api::CompaniesController < ApplicationController
    
    def index
        @companies = Company.all
    end

    def create
        @company = Company.new(companies_params)
        if @company.save
            render :show
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def show
        @company = Company.find_by(id: params[:id])
    end

    def update
        @company = Company.find_by(id: params[:id])
        if @company && @company.update_attributes(companies_params)
            render :show
        else
            render json: @company.errors.full_messages, status: 422
        end
    end

    def destroy
        @company = Company.find_by(id: params[:id])
        if @company.destroy
            render json: {}
        else
            render json: @company.errors.full_messages, status: 404
        end
    end

    private

    def companies_params
        params.require(:company).permit(:name, :rating)
    end

end
