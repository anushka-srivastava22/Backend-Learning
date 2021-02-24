if(fs.existsSync())
{
    fs.mkdir('./bro', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}
else
{
    fs.rmdir('./bro', (err) => {
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
}
 
//Deleting

if(fs.existsSync('./doc/yours.txt')) 
{
    fs.unlink('./doc/yours.txt', (err) => {
        if(err)
        {
            console.log(err);

        }
        console.log('file deleted');
    })
}