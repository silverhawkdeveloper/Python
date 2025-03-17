# Dentro de la carpeta donde está manage.py
Esto creará la carpeta blog con nuestra aplicación dentro del proyecto.
1. python manage.py startapp blog

La diferencia entre un proyecto y una aplicación en Django, es que un proyecto está compuesto de una o más aplicaciones. Lo interesante de este enfoque, muy influenciado por la orientación a objetos, es que las aplicaciones se pueden reutilizar en otro proyecto.

Hay que tener en cuenta que no podemos crear modelos sin estar asociados a una aplicación.
En el archivo blog/models.py definiremos todos los modelos.

Ejecutaremos la siguiente orden cada vez que modifiquemos el fichero models.py para crear las tablas nuevas que hemos definido en el fichero models.py en la base de datos.
2. python manage.py migrate

# Model Template View
El fichero views.py es es equivalente a los controladores que ya conocemos, y son las funciones que se van a encargar de responder al cliente. Pero antes de nada, en este fichero views.py, tendremos que importar el HttpResponse mediante el correspondiente import:
3. from django.http import HttpResponse
4. 
    def saludo(request):
        return HttpResponse("Esta la primera página del blog")
    def despedida(request):
        return HttpResponse("Esta es la página de despedida")

Ahora tenemos que mapear las funciones en el archivo urls.py. Para ello las añadimos a la lista de urlpatterns. Tendremos que importar previamente las vistas que hemos definido antes en nuestra aplicación blog. Ya está la que viene por defecto en Django, que es la de admin. Debería quedar algo así:

from blog.views import saludo, despedida

    urlpatterns = [
      path('admin/', admin.site.urls),
      path('saludo/', saludo),
      path('adios/', despedida),
    ]

Como vemos, la función saludo es la que se ejecuta cuando se accede a la URL /saludo/. Y no tienen nada que ver el nombre que pongamos en la URL y la función que se ejecuta.