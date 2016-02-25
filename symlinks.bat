@echo off
rem ToDo: Testar esse script
rem Criar os links simbolicos (linux/mac) para a pasta 'unirio'.
rem Uso: symlinks.bat pasta1 pasta2 ...
rem Sera feita uma copia do link simbolico em cada pasta passada como argumento.

rem Pegando o diretorio atual expandido.
set path=%~dp0

rem Para cada argumento passado, criar um link. Cada argumento sera tratado como um diretorio para se criar um link.
:loop_start
if (%1) == () goto loop_end
mklink "%1" %path%\unirio
shift
goto loop_start
:loop_end
