# 🧭 Introduction

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

Game Tagger is a CNN-based machine learning model that tags games based on their in-game screenshots. It is a multi-label classifier built from the ground up and trained on data scraped from the Steam games store. This repository contains the frontend code for a sample web interface built using React that allows users to upload screenshots and receive predictions from the model, which is hosted on AWS. The backend code for model creation can be found [here](https://github.com/RajwolChapagain/Game-Tagger).

# 🔗 Deployed Website
To see this project in action, visit the linked [website](https://rajwolchapagain.github.io/Game-Tagger-Website/).

# 🛠️ Development
To get started with development, clone the repository:
```
git clone https://github.com/RajwolChapagain/Game-Tagger-Website.git
```
Enter it:
```
cd Game-Tagger-Website
```
Install the nix package manager for entering the development environment:
```
sh <(curl --proto '=https' --tlsv1.2 -L https://nixos.org/nix/install) --daemon
```
Restart the shell environment to get access to the nix command:
```
exec bash
```
Add yourself as a trusted user in nix.conf:
```
echo "trusted-users = root $(whoami)" | sudo tee -a /etc/nix/nix.conf
```
Restart the nix daemon:
```
sudo systemctl restart nix-daemon.service
```
Enter the development environment:
```
NIX_CONFIG="experimental-features = nix-command flakes" nix develop
```
Host a development build:
```
npm run dev
```

# 🛡️ License
This project is licensed under the [GNU General Public License v3.0 (GPL v3)](LICENSE).
