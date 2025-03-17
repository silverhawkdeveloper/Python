from django.shortcuts import render

def mostrar_info(request):
    return render(request, "informacion.html")

def panel_general(request):
    return render(request, "administrador/panel_general.html")