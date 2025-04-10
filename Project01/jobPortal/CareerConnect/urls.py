from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('home/', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('findjob/', views.findjob_view, name='findjob'),
    path('companies/', views.companies_view, name='companies'),
    path('contact/', views.contact_view, name='contact'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
]