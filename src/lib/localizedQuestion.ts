import { Question } from '../types';
import { Language } from '../contexts/LanguageContext';

export function getLocalizedExplanation(
  question: Question | undefined,
  language: Language
): string {
  if (!question) return '';

  switch (language) {
    case 'en':
      return question.explanation_en || question.explanation || '';

    case 'vi':
      return question.explanation_vi || question.explanation || '';

    case 'ja':
    default:
      return question.explanation_ja || question.explanation || '';
  }
}