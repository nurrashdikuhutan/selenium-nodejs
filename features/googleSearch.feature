Feature: Google Search

    Scenario: Search valid text in Google
        When we search for a text 
        Then we should see the specified link
            | text           | description                                |
            | nur            | A large phone with one of the best screens |
            | nur2           | A great phone with one of the best cameras |