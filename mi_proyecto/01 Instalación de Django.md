# Entorno virtual. 
Lo primero que deberíamos hacer es instalar una herramienta que nos va a servir de entorno virtual. De esta manera, vamos a tener aislada la aplicación Django sin entorpecer el resto del sistema. Podríamos incluso tener un entorno virtual con diferentes versiones de Django para cada ejercicio.

Para ello, hacemos lo siguiente:
1. apt install python3.8-venv

Esto crea la carpeta myenv en el directorio donde se ejecute
2. python3 -m venv mi_entorno

Activar el entorno virtual. Una vez hecho lo anterior, podemos activarlo con el siguiente comando (deberemos hacerlo cada vez que comencemos nuevamente a desarrollar la aplicación)
3. source mi_entorno/bin/activate

# Instalación de Django. Seguimos estos pasos.
Nos aseguramos que tenemos actualizado pip

1. python -m pip install --upgrade pip

Vamos a realizar una instalación mediante el fichero requirements.txt, su contenido es:
Django~=4.1

Ahora ejecuta la siguiente orden para instalar Django:

2. pip install -r requirements.txt

