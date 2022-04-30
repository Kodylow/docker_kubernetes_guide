FROM nixos/nix

WORKDIR /usr/app
COPY ./ ./

RUN nix-env -iA nixpkgs.bitcoind
RUN mkdir $HOME/.bitcoin
RUN ls -a $HOME/
RUN nix-env -iA nixpkgs.clightning
RUN chmod +x startup_regtest.sh
CMD source ./startup_regtest.sh && start_ln 3 && l1-cli getinfo
