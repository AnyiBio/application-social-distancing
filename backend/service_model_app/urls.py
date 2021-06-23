from django.urls import path
from service_model_app import views

urlpatterns = [
    path("", views.request_img, name="request_img"),
]