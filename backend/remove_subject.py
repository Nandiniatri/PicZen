from rembg import remove
import sys
import os

input_path = sys.argv[1]
output_path = sys.argv[2]

os.makedirs(os.path.dirname(output_path), exist_ok=True)

with open(input_path, 'rb') as f:
    input_data = f.read()

output_data = remove(input_data)

with open(output_path, 'wb') as f:
    f.write(output_data)
