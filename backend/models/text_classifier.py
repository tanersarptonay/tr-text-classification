from torch import nn
from transformers import AutoModel

MODEL_NAME = "dbmdz/bert-base-turkish-cased"
NUM_LABEL = 7
MAX_LEN = 512

class TextClassifier(nn.Module):
  def __init__(self, n_classes):
    super(TextClassifier, self).__init__()
    self.bert = AutoModel.from_pretrained(MODEL_NAME, 
                                            num_labels=NUM_LABEL, 
                                            return_dict=False)
    #print(self.bert)

    for name,param in self.bert.named_parameters():
      if (name == "encoder.layer.6.attention.self.query.weight"):
        break
      param.requires_grad = False

    self.drop = nn.Dropout(p=0.3)
    self.out = nn.Linear(self.bert.config.hidden_size, n_classes)
    self.softmax = nn.Softmax(dim=1)
  
  def forward(self, input_ids, attention_mask):
    (_, pooled_output) = self.bert(
        input_ids=input_ids,
        attention_mask=attention_mask
    )
    output = self.drop(pooled_output)
    output = self.out(output)
    return self.softmax(output)
