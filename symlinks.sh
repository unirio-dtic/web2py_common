#!/bin/sh
# Criar os links simbolicos (linux/mac) para a pasta 'unirio'.
# Uso: ./symlinks.sh pasta1 pasta2 ...
# Sera feita uma copia do link simbolico em cada pasta passada como argumento.

# Pegando o diretorio atual expandido.
path=$(cd .; pwd)

# Para cada argumento passado, criar um link. Cada argumento sera tratado como um diretorio para se criar um link.
for var in "$@"
do
    ln ${path}/unirio --target-directory="$var" --symbolic
done
