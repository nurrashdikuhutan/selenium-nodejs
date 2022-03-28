Feature: Google Search

    Scenario: Search Maui in Google
        When we search for Maui 
        Then we should see the maui-rentals.com link

    Scenario: Search Brtiz in Google
        When we search for Brtiz 
        Then we should see the britz.com link