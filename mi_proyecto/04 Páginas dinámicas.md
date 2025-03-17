# Dentro del fichero views.py incluimos una función que devuelva lo siguiente:
def dameFecha(request):
  fecha_actual = datetime.datetime.now()
  documento = """
    <html>
      <body>
      <h2>
      La fecha y hora actual es: {}
      </h2>
      </body>
    </html>
  """.format(fecha_actual)
  return HttpResponse(documento)


# Para pasar parámetros a la función, debemos crear una URL con el parámetro que queremos pasar. Deberemos por tanto crear una URL con el siguiente formato:

  edad/<edad>/<agno>

donde `edad` y `agno` son los parámetros que queremos pasar.

Si queremos además indicar el tipo del parámetro (por ejemplo, si es de tipo int), deberemos indicarlo así en el fichero urls.py:

  path('edad/<int:edad>/<int:agno>/', calculaEdadActual),

La función que maneja esta url será la siguiente en el fichero views.py.

def calculaEdadActual(request, edad, agno):
    periodo = agno - datetime.datetime.now().year 
    nueva_edad = edad + periodo
    documento = """
    <html>
     <body>
      <h2>
      En el año {} tendrás: {}
      </h2>
     </body>
    </html>
    """.format(agno, nueva_edad)
    return HttpResponse(documento)