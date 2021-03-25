import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { Page } from '../components/Page/Page'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { AboutPage } from './AboutPage/AboutPage'
import { AuthPage } from './AuthPage/AuthPage'
import { CatalogPage } from './CatalogPage/CatalogPage'
import { Error404 } from './Error404/Error404'
import { MainLayout } from '../layouts/MainLayout/MainLayout'
import { AllReferencesPage } from './reference/AllReferencesPage/All-references'
import { AuthorPage } from './reference/AuthorPage/AuthorPage'
import { GenrePage } from './reference/GenrePage/GenrePage'
import { LanguagePage } from './reference/LanguagePage/LanguagePage'
import { PublisherPage } from './reference/PublisherPage/PublisherPage'

interface Props {
}

export const Routes: React.FC<Props> = () => {
  return (
    <Switch>
      <Redirect exact from={'/'} to={'/catalog'} />
      <Page path={'/auth'} layout={AuthLayout} component={AuthPage} />
      <Page secured path={'/catalog'} layout={MainLayout} component={CatalogPage} />
      <Page exact secured path={'/ref'} layout={MainLayout} component={AllReferencesPage} />
      <Page secured path={'/ref/author'} layout={MainLayout} component={AuthorPage} />
      <Page secured path={'/ref/genre'} layout={MainLayout} component={GenrePage} />
      <Page secured path={'/ref/language'} layout={MainLayout} component={LanguagePage} />
      <Page secured path={'/ref/publisher'} layout={MainLayout} component={PublisherPage} />
      <Page secured path={'/about'} layout={MainLayout} component={AboutPage} />
      <Page path={'*'} layout={AuthLayout} component={Error404} />
    </Switch>
  )
}
