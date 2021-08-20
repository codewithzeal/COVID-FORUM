# import SentimentIntensityAnalyzer class 
# from vaderSentiment.vaderSentiment module. 
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer 
import sys
# function to print sentiments 
# of the sentence. 
def sentiment_scores(sentence): 

	# Create a SentimentIntensityAnalyzer object. 
	sid_obj = SentimentIntensityAnalyzer() 

	# polarity_scores method of SentimentIntensityAnalyzer 
	# oject gives a sentiment dictionary. 
	# which contains pos, neg, neu, and compound scores. 
	sentiment_dict = sid_obj.polarity_scores(sentence)

	# decide sentiment as positive, negative and neutral 
	if sentiment_dict['compound'] >= 0.001 : 
		print("ok") 

	elif sentiment_dict['compound'] <0 : 
		print("no") 

	else : 
		print("ok")
	
# Driver code 
if __name__ == "__main__" :
	sentence = sys.argv[1]
	sentence=sentence.replace("."," ")
	sentiment_scores(sentence)