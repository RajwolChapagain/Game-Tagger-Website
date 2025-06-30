{
	description = "A flake specifying a React devenv";

	inputs = {
		nixpkgs.url = "nixpkgs/nixos-unstable";
	};

	outputs = { self, nixpkgs }:
	let 
		system = "x86_64-linux";
		pkgs = nixpkgs.legacyPackages.${system};
	in {
		devShells.${system}.default = pkgs.mkShell {
			packages = with pkgs; [
				nodejs
			];

			shellHook = ''
				if which zsh &> /dev/null; then
					exec zsh
				fi
			'';
		};
	};
}
