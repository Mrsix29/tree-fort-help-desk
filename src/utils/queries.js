export const listFAQTypes = /* GraphQL */ `
    query ListFAQTypes {
        listFAQTypes {
            items {
                id
                faqType
                faqs {
                    items {
                        id
                        question
                        answer
                    }
                    nextToken
                    startedAt
                }
                createdAt
                updatedAt
                _version
                _deleted
                _lastChangedAt
            }
            nextToken
            startedAt
        }
    }
`;