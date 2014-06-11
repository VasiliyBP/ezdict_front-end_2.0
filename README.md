ezdict_front-end_2.0
====================
Развертка:

1. Установить [Virtualbox][vbox]
2. Установить [Virtualbox Extension Pack][vboxext]
3. Установить [Vagrant][vagrant]
4. Запустить [Git Bash][git] (git-bash.bat в архиве), далее все команды выполняются в нем
5. Перейти в папку, где будет лежать проект: **cd удобная_папка**
6. Склонировать проект: **git clone https://github.com/mrdslack/ezdict_front-end_2.0.git**
7. Перейти в папку с проектом: **cd ezdict_front-end_2.0**
8. Развернуть виртуалку: **vagrant up** (выполняется около 10-20 минут)
9. После развертывания зайти внутрь виртуалки: **vagrant ssh**
10. Перейти в папку с проектом (внутри виртуалки): **cd /vagrant**
11. Запустить проект: **grunt serve**

После выполнения вышеуказанных действий, можно зайти по адресу http://192.168.50.4:7000 и увидеть там сайт

Страница автоматически обновляется при изменении файлов, файл app.scss автоматически компилируется в css, в этом файле должны быть импорты нужных файлов из папки sass

Верстать [сюда][verstat]  
JS [сюда][js]


Завершить работу сервера: нажать **Ctrl + C**  
Выйти из виртуалки: **logout**  
Завершить работу виртуалки: **vagrant halt** 

После завершения работы, если нужно возобновить работу, надо повторить шаги 7-11 (Второй и последующие разы все будет быстро).

Уничтожить виртуалку и все ее следы: **vagrant destroy**

После уничтожения, **vagrant up** снова будет выполняться долго.

[vbox]:http://download.virtualbox.org/virtualbox/4.3.12/VirtualBox-4.3.12-93733-Win.exe
[vboxext]:http://download.virtualbox.org/virtualbox/4.3.12/Oracle_VM_VirtualBox_Extension_Pack-4.3.12-93733.vbox-extpack
[vagrant]:https://dl.bintray.com/mitchellh/vagrant/vagrant_1.6.3.msi
[git]: https://msysgit.googlecode.com/files/PortableGit-1.8.1.2-preview20130201.7z
[verstat]: https://github.com/mrdslack/ezdict_front-end_2.0/blob/master/index/partial/index/index.html
[js]: https://github.com/mrdslack/ezdict_front-end_2.0/blob/master/index/partial/index/index.js
