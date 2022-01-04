CREATE TABLE Users(
    UserId INTEGER PRIMARY KEY ASC,
    UserEmail TEXT NOT NULL,
    UserPassword TEXT NOT NULL,
    UserFirstName TEXT,
    UserLastName TEXT,
    UserRole TEXT
);

CREATE TABLE Transactions(
    TransactionId INTEGER PRIMARY KEY ASC,
    TransactionVendor TEXT,
    TransactionDate DATE,
    TransactionType TEXT,
    TransactionAmount REAL,
    TransactionCategory TEXT
);

CREATE TABLE Accounts(
    AccountId INTEGER PRIMARY KEY ASC,
    AccountName TEXT,
    AccountLinkedBank TEXT,
    AccountCreationDate DATE
);