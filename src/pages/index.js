import * as React from "react"
import {graphql} from 'gatsby'
import ReactMarkdown from 'react-markdown'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  IconButton,
  Link,
  Typography
} from "@material-ui/core";

import {FaApple, FaGithub, FaJava, FaLinux, FaWikipediaW, FaWindows} from 'react-icons/fa'
import {ExpandMoreOutlined} from "@material-ui/icons";

const LinkIcon = ({url, label, icon}) => {
  return (
    <Link href={url} target={"_blank"}>
      <IconButton aria-label={label}>
        {icon}
      </IconButton>
    </Link>)
}

const IndexPage = ({data}) => {
  const {nodes} = data.allMarkdownRemark
  return (
    <Container maxWidth="xl">
      <Box
        color="primary.main"
        bgcolor="background.paper"
        fontFamily="h6.fontFamily"
        fontSize={{xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize'}}
        p={{xs: 2, sm: 3, md: 4}}
      >
        (Partial) List of POP-enabled coins
      </Box>

      <Grid container justify="center" spacing={3}>
        {nodes && nodes.map(({frontmatter}, i) => {
          const {
            apm_artifact,
            altchainid,
            date,
            docs,
            github,
            configname,
            linux_artifacts,
            win_artifacts,
            mac_artifacts,
            network,
            symbol,
            title,
            version,
            config,
            apmconfig
          } = frontmatter
          return (
            <Grid item key={i}>
              <Card>
                <CardHeader
                  title={title}
                  subheader={`${symbol} / ID: ${altchainid} / ${network}`}
                />
                <CardContent>

                  <Typography>
                    Added: {date}
                  </Typography>
                  <Typography>
                    Version:
                    <Link href={`https://github.com/veriblock/vbk-ri-btc/commit/${version}`}>{version}</Link>
                  </Typography>

                  <Grid>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreOutlined/>}
                      >
                        <Typography>Node</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            <LinkIcon url={github} icon={<FaGithub/>} label={"Github"}/>
                            <LinkIcon url={docs} icon={<FaWikipediaW/>} label={"Docs"}/>
                            <LinkIcon url={win_artifacts} icon={<FaWindows/>} label={"Windows"}/>
                            <LinkIcon url={linux_artifacts} icon={<FaLinux/>} label={"Linux"}/>
                            <LinkIcon url={mac_artifacts} icon={<FaApple/>} label={"MacOS"}/>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography paragraph>
                              Sample {configname || "config"}:
                            </Typography>
                            <ReactMarkdown>
                              {config}
                            </ReactMarkdown>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreOutlined/>}>
                        <Typography>
                          APM
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            <LinkIcon url={"https://github.com/veriblock/nodecore"} icon={<FaGithub/>}
                                      label={"Github"}/>
                            <LinkIcon url={"https://wiki.veriblock.org/index.php/Altchain_PoP_Miner"}
                                      icon={<FaWikipediaW/>} label={"Docs"}/>
                            <LinkIcon url={apm_artifact} icon={<FaJava/>} label={"APM"}/>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography paragraph>
                              Sample application.conf:
                            </Typography>
                            <ReactMarkdown>
                              {apmconfig}
                            </ReactMarkdown>
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )
        })}

      </Grid>
    </Container>

  )
}

export default IndexPage

export const query = graphql`
          query Coins {
          allMarkdownRemark {
          nodes {
          frontmatter {
          apm_artifact
          altchainid
          apmconfig
          config
          date
          docs
          github
          linux_artifacts
          mac_artifacts
          network
          symbol
          configname
          title
          version
          win_artifacts
        }
      }
    }
  }
`
