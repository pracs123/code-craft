import requests
import json

# Clerk API Endpoint
API_URL = "https://api.clerk.dev/v1/users"
API_KEY = "sk_test_w9paTkEVLkSFZQi8uKsTouR4hMtbjEcnAQv5aT4jBs"  # Replace with your Clerk Secret Key

# Load user data from JSON file
with open('users.json', 'r') as file:
    users = json.load(file)

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

for user in users:
    payload = {
        "username": user["username"],
        "password": user["password"]
    }

    response = requests.post(API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        print(f"User {user['username']} created successfully.")
    else:
        print(f"Failed to create {user['username']}: {response.text}")