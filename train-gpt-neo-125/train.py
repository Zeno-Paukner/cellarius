from happytransformer import HappyGeneration
from happytransformer import GENSettings
from happytransformer import GENTrainArgs

happy_gen = HappyGeneration("GPT-NEO", "EleutherAI/gpt-neo-125M")
top_k_sampling_settings = GENSettings(do_sample=True, early_stopping=False, top_k=50, temperature=0.7)
result = happy_gen.generate_text("To solve world hunger we must invest in ", args=top_k_sampling_settings)
print(result.text)
args = GENTrainArgs(num_train_epochs=1)
happy_gen.train("train.txt", args=args)