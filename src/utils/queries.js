export const listHelpDeskSections = /* GraphQL */ `
    query ListHelpDeskSections {
        listHelpDeskSections {
            items {
                id
                sectionName
                sectionLogo
                sectionLink
                sectionDescription
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

export const listPopularItemTypes = /* GraphQL */ `
    query ListPopularItemTypes {
        listPopularItemTypes {
            items {
                id
                popularType
                popularTypeLogo
                popularUrls {
                    items {
                        id
                        url
                        urlName
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

export const listDocTypes = /* GraphQL */ `
    query ListDocTypes {
        listDocTypes {
            items {
                id
                docType
                docLogo
                urlLogo
                docs {
                    items {
                        id
                        url
                        urlName
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

export const listResourceTypes = /* GraphQL */ `
    query ListResourceTypes {
        listResourceTypes {
            items {
                id
                resourceType
                resourceLogo
                urlLogo
                resources {
                    items {
                        id
                        url
                        urlName
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