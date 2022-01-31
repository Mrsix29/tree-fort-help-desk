/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFAQType = /* GraphQL */ `
  query GetFAQType($id: ID!) {
    getFAQType(id: $id) {
      id
      faqType
      faqs {
        items {
          id
          question
          answer
          createdAt
          updatedAt
          fAQTypeFaqsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFAQTypes = /* GraphQL */ `
  query ListFAQTypes(
    $filter: ModelFAQTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        faqType
        faqs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFAQ = /* GraphQL */ `
  query GetFAQ($id: ID!) {
    getFAQ(id: $id) {
      id
      faqType {
        id
        faqType
        faqs {
          nextToken
        }
        createdAt
        updatedAt
      }
      question
      answer
      createdAt
      updatedAt
      fAQTypeFaqsId
    }
  }
`;
export const listFAQS = /* GraphQL */ `
  query ListFAQS(
    $filter: ModelFAQFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        faqType {
          id
          faqType
          createdAt
          updatedAt
        }
        question
        answer
        createdAt
        updatedAt
        fAQTypeFaqsId
      }
      nextToken
    }
  }
`;
