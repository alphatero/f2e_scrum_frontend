import { useState, useEffect } from 'react';
import { IntroductionLayout } from '../../components/introduction/IntroductionLayout';
import { fetchContent, verifyKeyIsMatch } from '../../api';
import { apiResponseVerifyKeys } from '../../api/constants';

export function SprintGuide() {
  const [fetchState, setFetchState] = useState(false);
  const [pageContent, setPageContent] = useState({});

  useEffect(() => {
    fetchContent('/introduction/sprint-guide')
      .then((resultData) => {
        const verifyData = Object.keys(resultData);

        if (verifyKeyIsMatch(apiResponseVerifyKeys.introduction.sprintGuide, verifyData)) {
          setFetchState(true);
          setPageContent(resultData);
        } else {
          setFetchState(false);
        }
      });
  }, []);

  if (!fetchState) {
    return (
      <h2>loading...</h2>
    );
  }
  return (
    <IntroductionLayout info={pageContent} />
  );
}

export default SprintGuide;
