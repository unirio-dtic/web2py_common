@echo off
rem Criar os links simbolicos (windows) para os recursos da pasta 'unirio' (css, fonts, images, js e html).
rem Deve-se rodar o script nesta pasta (web2py_common/)!
rem O script cria pastas 'unirio' caso não existam dentro de static/css, static/fonts, static/images, static/js e views/

rem ToDo: Testar esse script!!!

rem Pegando o diretorio atual expandido.
set path=%~dp0

rem Remove se ja existem
del ../static/css/unirio
del ../static/fonts/unirio
del ../static/images/unirio
del ../static/js/unirio
del ../views/_unirio

rem Cria os links

mklink /D ..\static\css\unirio %path%\unirio\css
mklink /D ..\static\fonts\unirio %path%\unirio\fonts
mklink /D ..\static\images\unirio %path%\unirio\images
mklink /D ..\static\js\unirio %path%\unirio\js
mklink /D ..\views\_unirio %path%\unirio\html
