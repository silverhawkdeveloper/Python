from django.shortcuts import render

def mostrar_inicio(request):
    return render(request, "inicio.html")