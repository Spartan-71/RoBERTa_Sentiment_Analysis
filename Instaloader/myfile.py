# For data
import instaloader
from itertools import islice
import pandas as pd
from pprint import pprint
import json

# For model
from transformers import AutoModelForSequenceClassification
from transformers import TFAutoModelForSequenceClassification
from transformers import AutoTokenizer, AutoConfig
import numpy as np
from scipy.special import softmax

def preprocess(text):
    new_text = []
    for t in text.split(" "):
        t = '@user' if t.startswith('@') and len(t) > 1 else t
        t = 'http' if t.startswith('http') else t
        new_text.append(t)
    return " ".join(new_text)

# load the loader
L = instaloader.Instaloader()
L.login(user="OdinHarkson", passwd="knightkp")

# Get post
post_id = "C2zdukeMsUZ"
post = instaloader.Post.from_shortcode(L.context, post_id)  # Replace with actual shortcode
max_comments=10
comments = islice(post.get_comments(), max_comments)

# %%
df = pd.DataFrame(columns=['Comments', 'time'])

# Add to lists
comments_list=[]
time_list=[]
likes_list=[]
scores_list = []
for comment in comments:
    comments_list.append(comment.text)
    time_list.append(str(comment.created_at_utc))
    likes_list.append(comment.likes_count)

# use model to evaluate
model_name = "cardiffnlp/twitter-roberta-base-sentiment-latest"
tokenizer = AutoTokenizer.from_pretrained(model_name)
config = AutoConfig.from_pretrained(model_name)

model = AutoModelForSequenceClassification.from_pretrained(model_name)

for comment in comments_list:
    text = comment
    text = preprocess(text)
    encoded_input = tokenizer(text, return_tensors='pt')
    output = model(**encoded_input)
    scores = output[0][0].detach().numpy()
    scores = softmax(scores)
    score_dict = {
        'positive' : str(scores[0]),
        'neutral' : str(scores[1]),
        'negative' : str(scores[2])
    }
    scores_list.append(score_dict)
    print(scores, end='\t')
    # ranking = np.argsort(scores)
    print(comment)

# Create a DataFrame with required data
dataset = pd.DataFrame({
    'time_list' : time_list,
    'comments' : comments_list,
    'likes' : likes_list,
    'scores' : scores_list
})

dataset = dataset.to_dict(orient='records')
json_data = json.dumps(dataset, indent=4)

print(json_data)
