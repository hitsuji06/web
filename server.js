const express = require('express')
const mongoose =require('mongoose')
const articleRouter= require('./routes/articles')
const app= express()

mongoose.connect('mongodb://localhost/blog')
app.set('view engine','ejs')

app.use(express.urlencoded({extended : false}))

app.get('/', (req, res) =>
{
	const articles = [{
		title: 'Test Article',
		created: new Date(),
		description: 'Sigma Article'

	}]
	res.render('articles/index', { articles: articles})

})
app.use('/articles', articleRouter)
app.listen(5000)
