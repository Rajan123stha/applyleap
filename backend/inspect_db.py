import sqlite3

# Path to your database file
db_path = "C:/Users/Rajan/OneDrive/Desktop/Full stack/ApplyleapProject/backend/db.sqlite3"

# Connect to the database
connection = sqlite3.connect(db_path)

# Create a cursor to execute SQL queries
cursor = connection.cursor()

# Example: List all tables
cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
tables = cursor.fetchall()
print("Tables in the database:")
for table in tables:
    print(table[0])

cursor.execute("PRAGMA table_info(university_universitypage);")
columns = cursor.fetchall()
print("Columns in wagtailcore_page:")
for column in columns:
    print(column)


# Close the connection
connection.close()
