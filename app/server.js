require("dotenv").config()

const express = require("express")
const bodyParser = require("body-parser")
const AWS = require("aws-sdk")
const path = require("path")

const app = express()

app.use(bodyParser.json())
app.use(express.static("public"))

AWS.config.update({
  region: process.env.AWS_REGION
})

const dynamo = new AWS.DynamoDB.DocumentClient()

// SIGNUP
app.post("/signup", async (req, res) => {

  const { email, password } = req.body

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      email: email,
      password: password
    }
  }

  try {
    await dynamo.put(params).promise()
    res.json({ message: "User created" })
  } catch (err) {
    res.status(500).json(err)
  }

})


// LOGIN
app.post("/login", async (req, res) => {

  const { email, password } = req.body

  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Key: { email }
  }

  try {

    const user = await dynamo.get(params).promise()

    if (!user.Item) {
      return res.json({ message: "User not found" })
    }

    if (user.Item.password === password) {
      res.json({ success: true })
    } else {
      res.json({ message: "Wrong password" })
    }

  } catch (err) {
    res.status(500).json(err)
  }

})

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT)
})