/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFAQType = /* GraphQL */ `
  mutation CreateFAQType(
    $input: CreateFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    createFAQType(input: $input, condition: $condition) {
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
export const updateFAQType = /* GraphQL */ `
  mutation UpdateFAQType(
    $input: UpdateFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    updateFAQType(input: $input, condition: $condition) {
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
export const deleteFAQType = /* GraphQL */ `
  mutation DeleteFAQType(
    $input: DeleteFAQTypeInput!
    $condition: ModelFAQTypeConditionInput
  ) {
    deleteFAQType(input: $input, condition: $condition) {
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
export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
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
export const updateFAQ = /* GraphQL */ `
  mutation UpdateFAQ(
    $input: UpdateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    updateFAQ(input: $input, condition: $condition) {
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
export const deleteFAQ = /* GraphQL */ `
  mutation DeleteFAQ(
    $input: DeleteFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    deleteFAQ(input: $input, condition: $condition) {
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
