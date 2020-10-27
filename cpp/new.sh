if [ -z "$1" ]
then
       	echo 'ERROR: need paramter `new <problem name>`'
	exit 1 
fi
path="./problems/$1"
cp -r ./problem_template $path
mv "$path/TTT.cpp" "$path/$1.cpp"
sed -i "s/TTT/$1/g" "$path/$1.cpp"
