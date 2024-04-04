const express = require('express')
const articleRouter= require('./routes/articles')
const app= express()


app.set('view engine','ejs')
app.use('/articles', articleRouter)

app.get('/', (req, res) =>
{
	const articles = [{
		title: 'Test Article',
		created: Date.now(),
		description: 'Sigma Article'

	}]
	res.render('index', { articles: articles})

})
app.listen(5000)
