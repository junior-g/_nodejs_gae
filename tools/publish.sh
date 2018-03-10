#echo -e "\e[0;32m[\u@\h \W]\$ \e[m"

echo -e "Love \033[0;31m red \033[0m"

echo "Publish master?"
select yn in "Yes" "No"; do
    case $yn in
        Yes) echo "Yessssss"; break;;
        No) echo "Noooooooo"; break;;
    esac
done
echo "Publish master or stable?"
select branch in "master" "stable"; do
    read -p "You selected $branch. [Enter] to continue"
    echo "Clear node_modules?"
    select yn in "Yes" "No"; do
        case $yn in
            Yes) echo "node_modules cleared."; break;;
            No) echo "node_modules aborted"; break;;
        esac
    done
    read -p "Ready to push. [Enter] to continue"
done
