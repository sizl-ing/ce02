from django.shortcuts import render

def home_view(request):
    return render(request, 'home.html')
def about_view(request):
    return render(request, 'about.html')
def findjob_view(request):
    return render(request, 'findjob.html')
def contact_view(request):
    return render(request, 'contact.html')
def companies_view(request):
    return render(request, 'companies.html')
def login_view(request):
    return render(request, 'login.html')
def register_view(request):
    return render(request, 'register.html')
# Create your views here.
