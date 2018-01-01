/**
 * Created by lcom57 on 30/12/17.
 */
const bluebird =require('bluebird');
var mongodb_client = bluebird.promisifyAll(require('mongodb')).MongoClient;

mongodb_client.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
    if(err){
        return console.log(err.message);
    }
    let f=1;
        db.collection('todos').updateMany({task: "high"}, {
            $rename: {
                task: "priority"
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err.message);
        });

    console.log("gg");
    db.close();
});



//delete
/*mongodb_client.connect('mongodb://localhost:27017/todoApp',(err,db)=>{
    if(err){
        return console.log(err.message);
    }
    db.collection('todos').findOneAndDelete({priority:"gg"}).then((res)=>{
        console.log(res);
    });
    console.log("");
    db.close();
});*/

/*mongodb_client.connectAsync('mongodb://localhost:27017/todoApp').then((db)=>{
   console.log("db connected!");
   console.log("database connected");
   db.collection('todos').insertAsync([{
       note1:'gg5',
       priority:'high'
   },{
       note1:'gg6',
       priority:'very low'
   }]).then((d)=>{
       console.log(d.ops);
       console.log(`created at ${d.ops[0]._id.getTimestamp()}`);
   }).catch((err)=>{console.log(err);});
   console.log("done");
   db.close();
   db.close();
}).catch((err)=>{
    console.log(err);
});*/