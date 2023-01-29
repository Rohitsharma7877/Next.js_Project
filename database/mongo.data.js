const mongotopics = [
  {
    heading: `MongoDB`,
    content: `MongoDB is a document database and can be installed locally or hosted in the cloud.`,
    video: ``,
    code: `
        {mongosh "mongodb+srv://cluster0.ex4ht.mongodb.net/myFirstDatabase"
         --apiVersion 1}
         
         --username YOUR_USER_NAME`,
  },
  {
    heading: `MongoDB mongosh Create Database
    `,
    content: `If you have used the connection string provided from the MongoDB
         Atlas dashboard, you should be connected to the myFirstDatabase database.`,
    video: ``,
    code: `{
        To see all available databases, in your terminal type show dbs.
        Notice that myFirstDatabase is not listed. This is because the database is empty. 
        An empty database is essentially non-existant.
    }`,
  },
  {
    heading: `Create Collection using mongosh`,
    content: `There are 2 ways to create a collection.`,
    video: ``,
    code: `{
        db.createCollection("posts")
    },{
        db.posts.insertOne(object)
    }`,
  },
  {
    heading: `Find Data`,
    content: `To find the datain database`,
    video: ``,
    code: `{
        db.posts.find()
    },{
        db.posts.findOne()
    }`,
  },
  {
    heading: `Update Document{`,
    content: `To update an existing document we can use the updateOne() or updateMany() methods.

        The first parameter is a query object to define which document or documents should be updated.
        
        The second parameter is an object defining the updated data.
        
        `,
    video: ``,
    code: `{
        db.posts.find( { title: "Post Title 1" } ) 
    },{
        db.posts.updateOne( { title: "Post Title 1" }, { $set: { likes: 2 } } ) 
    }`,
  },
  {
    heading: `MongoDB mongosh Delete`,
    content: `We can delete documents by using the methods deleteOne() or deleteMany().

        These methods accept a query object. The matching documents will be deleted.`,
    video: ``,
    code: `{
        db.posts.deleteOne({ title: "Post Title 5" })
    },{
        db.posts.deleteMany({ category: "Technology" })
    }`,
  },
  {
    heading: `MongoDB Update Operators`,
    content: `The following operators can be used to update fields:

        $currentDate: Sets the field value to the current date
        $inc: Increments the field value
        $rename: Renames the field
        $set: Sets the value of a field
        $unset: Removes the field from the document`,
    video: ``,
    code: `{
        db.posts.updateOne({ title: "Post Title 5" })
    }`,
  },
  {
    heading: `MongoDB Charts`,
    content: `MongoDB Charts Setup
        From the MongoDB Atlas dashboard, go to the Charts tab.
        
        If you've never used Charts before, click the Activate Now button. This will take about 1 minute to complete.
        
        You'll see a new dashboard. Click the dashboard name to open it.`,
    video: ``,
    code: `{
        Creating a Chart
Create a new chart by clicking the Add Chart button.

Visually creating a chart is intuitive. Select the data sources that you want to use.
    }`,
  },
];

export default mongotopics;
