from transformers import AutoTokenizer
import torch
import os

from .text_classifier import TextClassifier, MODEL_NAME, MAX_LEN, NUM_LABEL

CURRENT_DIR = os.getcwd()
MODEL_DIR = os.path.join(CURRENT_DIR, "models", "assets", "model.pt")
print("*"*20)
print(CURRENT_DIR)
print(MODEL_DIR)
print("*"*20)

class Model:
    def __init__(self):
        #self.device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
        self.device = torch.device("cpu")
        self.tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
        self.max_len = MAX_LEN

        classifier = TextClassifier(NUM_LABEL)
        classifier.load_state_dict(
            torch.load(MODEL_DIR, map_location=self.device)
        )
        classifier = classifier.eval()
        self.classifier = classifier.to(self.device)

    def int_to_label(self, idx):
        label_dict = {"siyaset":0, "dunya":1, "ekonomi":2, 
                        "kultur-sanat":3, "saglik":4, "spor":5, "teknoloji":6}
        for i in label_dict.items():
            if i[1] == idx:
                return i[0]
        raise IndexError


    def predict(self, text):
        encoding = self.tokenizer.encode_plus(
            text,
            add_special_tokens=True,
            max_length=self.max_len,
            return_token_type_ids=False,
            padding='max_length',
            truncation=True,
            return_tensors='pt',
        )

        input_ids = encoding["input_ids"].to(self.device)
        attention_mask = encoding["attention_mask"].to(self.device)

        with torch.no_grad():
            probabilities = self.classifier(input_ids, attention_mask)
        _, prediction = torch.max(probabilities, dim=1)
        pred_label = self.int_to_label(prediction[0])
        prob_list = [probabilities[0][i].item() for i in range(NUM_LABEL)]
        return (pred_label, prob_list)

model = Model()
def get_model():
    return model
