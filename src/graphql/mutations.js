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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
          faqTypeID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
  }
`;
export const createFAQ = /* GraphQL */ `
  mutation CreateFAQ(
    $input: CreateFAQInput!
    $condition: ModelFAQConditionInput
  ) {
    createFAQ(input: $input, condition: $condition) {
      id
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      question
      answer
      faqTypeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
