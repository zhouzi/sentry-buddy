/* @flow */
/* global window */
import * as React from 'react';
import styled from 'styled-components';
import { Container, Heading, Paragraph, Input, Button, View, spacing } from '../design';

type Credentials = {
  organizationSlug: string,
  projectSlug: string,
  token: string,
};

const Columns = styled(View).attrs({ as: 'div' })`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spacing.normal};
`;
const Highlight = styled.span`
  cursor: help;
  text-decoration: underline;
`;

function CredentialsPrompt({
  onSubmitCredentials,
  isLoading,
}: {
  onSubmitCredentials: (credentials: Credentials) => void,
  isLoading: boolean,
}) {
  const [organizationSlug, setOrganizationSlug] = React.useState(
    window.localStorage.getItem('organizationSlug') || ''
  );
  const [projectSlug, setProjectSlug] = React.useState(
    window.localStorage.getItem('projectSlug') || ''
  );
  const [token, setToken] = React.useState(window.localStorage.getItem('token') || '');

  const onSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    window.localStorage.setItem('organizationSlug', organizationSlug);
    window.localStorage.setItem('projectSlug', projectSlug);
    window.localStorage.setItem('token', token);

    onSubmitCredentials({ organizationSlug, projectSlug, token });
  };

  return (
    <Container>
      <form onSubmit={onSubmit} style={{ opacity: isLoading ? 0.6 : 1 }}>
        <Heading level={1}>Sentry Buddy</Heading>
        <Paragraph marginBottom="large">
          The below information are required to fetch issues from your Sentry account. You can find
          the organization and project slugs in the URL. For example, acme is the organization slug
          and app the project slug in the following URL: https://sentry.io/<Highlight title="Organization Slug">acme</Highlight>/<Highlight title="Project Slug">app</Highlight>/
          Regarding the API token, you can create one from your profile, under "API keys" or "API tokens" or "Auth tokens".
        </Paragraph>

        <Columns marginBottom="normal">
          <Input
            type="text"
            onChange={event => setOrganizationSlug(event.currentTarget.value)}
            value={organizationSlug}
            placeholder="Organization Slug"
            required
          />
          <Input
            type="text"
            onChange={event => setProjectSlug(event.currentTarget.value)}
            value={projectSlug}
            placeholder="Project Slug"
            required
          />
        </Columns>

        <Input
          marginBottom="normal"
          type="text"
          onChange={event => setToken(event.currentTarget.value)}
          value={token}
          placeholder="API Token"
          required
        />
        <Button primary disabled={isLoading}>
          {isLoading ? 'Fetching...' : 'Fetch issues'}
        </Button>
      </form>
    </Container>
  );
}

export default CredentialsPrompt;
