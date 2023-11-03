#!/bin/zsh

zsh -c "exec -a GatewayAPI node index.js &"
zsh -c "exec -a FormulasAPI node formulas/index.js &"
