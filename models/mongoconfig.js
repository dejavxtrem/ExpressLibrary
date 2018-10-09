const mongoose = require('mongoose');
const  Schema = mongoose.Schema;

let authorSchema = Schema ({
name: String,
stories: [{type: Schema.Types.ObjectId, ref: 'story'}]
});

let storySchema = Schema ({
  author:{type: Schema.Types.ObjectId, ref:'Author'},
  title: string
})

const story = mongoose.model('story',storySchema);
const Author = mongoose.model('Author',authorSchema);

let bob = new Author ({ name: 'Bob Smith'});

bob.save((err) => {
    try  {
        if (err) {
            return handleError(err);
        } else {
            let story = new story ({
                title: "Bob goes sledding",
                author: bob._id
            })
        };
    }
    catch(err) {
        console.log(`Error is ${err}`);
    }
})

story.save((err) => {
    if (err) {
        return handleError(err);
    } else {
        console.log(`Bob now has his story`);
    }
});

