#!/bin/sh
# Criar os links simbolicos (linux/mac) para os recursos da pasta 'unirio' (css, fonts, images, js e html).
# Deve-se rodar o script nesta pasta (web2py_common/)!
# O script cria pastas 'unirio' caso não existam dentro de static/css, static/fonts, static/images, static/js e views/

# Pegando o diretorio atual expandido.
path=$(cd .; pwd)

# Se não existir pasta 'unirio' dentro de static/css, criar.

# Remove se ja existem
rm ../static/css/unirio
rm ../static/fonts/unirio
rm ../static/images/unirio
rm ../static/js/unirio
rm ../views/_unirio

# Cria os links
ln --symbolic ${path}/unirio/css ../static/css/unirio
ln --symbolic ${path}/unirio/fonts ../static/fonts/unirio
ln --symbolic ${path}/unirio/images ../static/images/unirio
ln --symbolic ${path}/unirio/js ../static/js/unirio
ln --symbolic ${path}/unirio/html ../views/_unirio
