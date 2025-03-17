from django.shortcuts import render

def mostrar_login(request):
    return render(request, "login.html")