import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withInfo } from "@storybook/addon-info";
import { withDocs } from "../utils";

import {
    Pager,
    PagerItem,
    PagerLink,
    Form,
    FormGroup,
    Input,
    Label
} from "../../src";
import PageChangerExample from "./PageChangerExample";

import Esempi from "./Esempi.md";
import StatoDisabilitatoAttivo from "./StatoDisabilitatoAttivo.md";
import Allineamento from "./Allineamento.md";
import Responsive from "./Responsive.md";
import More from "./More.md";
import Changer from "./Changer.md";
import Jump from "./Jump.md";
import Simple from "./Simple.md";
import Link from "./Link.md";
import Total from "./Total.md";
import EsempiInterattivi from "./EsempiInterattivi.md";

const stories = storiesOf("Componenti/Pager", module);
stories.addDecorator(checkA11y);

const EsempiComponent = () => (
    <Pager>
        <PagerItem>
            <PagerLink previous href="#">
                <i className="it-chevron-left" />
            </PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink href="#">1</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink next href="#">
                <i className="it-chevron-right" />
            </PagerLink>
        </PagerItem>
    </Pager>
);
stories.add("Esempi", withDocs(Esempi, withInfo()(EsempiComponent)));

const StatoDisabilitatoAttivoComponent = () => (
    <Pager>
        <PagerItem disabled>
            <PagerLink previous href="#">
                <i className="it-chevron-left" />
            </PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink aria-current="page" href="#">
                1
            </PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink href="#">2</PagerLink>
        </PagerItem>
        <PagerItem disabled>
            <PagerLink href="#">3</PagerLink>
        </PagerItem>
        <PagerItem disabled>
            <PagerLink next href="#">
                <i className="it-chevron-right" />
            </PagerLink>
        </PagerItem>
    </Pager>
);
stories.add(
    "Stato disabilitato e attivo",
    withDocs(
        StatoDisabilitatoAttivo,
        withInfo()(StatoDisabilitatoAttivoComponent)
    )
);

const AllineamentoComponent = () => (
    <section>
        <Pager size="lg" className="justify-content-center mb-3">
            <PagerItem disabled>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink aria-current="page" href="#">
                    1
                </PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink href="#">2</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink href="#">3</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>

        <Pager size="sm" className="justify-content-end mb-3">
            <PagerItem disabled>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink aria-current="page" href="#">
                    1
                </PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink href="#">2</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink href="#">3</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
    </section>
);
stories.add(
    "Allineamento",
    withDocs(Allineamento, withInfo()(AllineamentoComponent))
);

const ResponsiveComponent = () => (
    <Pager className="mb-3">
        <PagerItem>
            <PagerLink previous href="#">
                <i className="it-chevron-left" />
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">9</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">10</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink aria-current="page" href="#">
                11
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">12</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">13</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink next href="#">
                <i className="it-chevron-right" />
            </PagerLink>
        </PagerItem>
    </Pager>
);
stories.add(
    "Responsive",
    withDocs(Responsive, withInfo()(ResponsiveComponent))
);

const moreStories = storiesOf("Componenti/Pager/Funzioni aggiuntive", module);
moreStories.addDecorator(checkA11y);

const MoreComponent = () => (
    <Pager className="mb-3">
        <PagerItem>
            <PagerLink previous href="#">
                <i className="it-chevron-left" />
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">1</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">24</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">25</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink aria-current="page" href="#">
                26
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">27</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">28</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">50</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink next href="#">
                <i className="it-chevron-right" />
            </PagerLink>
        </PagerItem>
    </Pager>
);
moreStories.add("More", withDocs(More, withInfo()(MoreComponent)));

const ChangerComponent = () => (
    <nav className="pagination-wrapper">
        <Pager className="mb-3">
            <PagerItem>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">1</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">24</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">25</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink aria-current="page" href="#">
                    26
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">27</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">28</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">50</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
        <PageChangerExample />
    </nav>
);
moreStories.add(
    "Page changer",
    withDocs(
        Changer,
        withInfo({
            propTablesExclude: [PageChangerExample]
        })(ChangerComponent)
    )
);

const JumpComponent = () => (
    <nav className="pagination-wrapper">
        <Pager className="mb-3">
            <PagerItem>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">1</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">24</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">25</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink aria-current="page" href="#">
                    26
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">27</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">28</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">50</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
        <Form>
            <FormGroup>
                <Input
                    id="jumpToPage"
                    type="text"
                    className="form-control"
                    maxLength="2"
                />
                <Label for="jumpToPage">Vai a ...</Label>
            </FormGroup>
        </Form>
    </nav>
);
moreStories.add(
    "Jump to page",
    withDocs(
        Jump,
        withInfo({
            propTablesExclude: [Form, FormGroup, Input, Label]
        })(JumpComponent)
    )
);

const SimpleComponent = () => (
    <nav className="pagination-wrapper">
        <Pager className="mb-3">
            <PagerItem disabled>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">1</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">/</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">5</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
    </nav>
);
moreStories.add("Simple mode", withDocs(Simple, withInfo()(SimpleComponent)));

const LinkComponent = () => (
    <Pager className="mb-3">
        <PagerItem>
            <PagerLink previous href="#" className="text">
                Precedente
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">1</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">24</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">25</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink aria-current="page" href="#">
                26
            </PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">27</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">28</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">…</PagerLink>
        </PagerItem>
        <PagerItem className="d-none d-sm-block">
            <PagerLink href="#">50</PagerLink>
        </PagerItem>
        <PagerItem>
            <PagerLink next href="#" className="text">
                Successiva
            </PagerLink>
        </PagerItem>
    </Pager>
);
moreStories.add("Link testuali", withDocs(Link, withInfo()(LinkComponent)));

const TotalComponent = () => (
    <nav className="pagination-wrapper pagination-total">
        <Pager className="mb-3">
            <PagerItem>
                <PagerLink previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">1</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink aria-current="page" href="#">
                    24
                </PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">25</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink href="#">26</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">27</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">28</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">…</PagerLink>
            </PagerItem>
            <PagerItem className="d-none d-sm-block">
                <PagerLink href="#">50</PagerLink>
            </PagerItem>
            <PagerItem>
                <PagerLink next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
        <p>
            <span className="sr-only">Pagina</span> 24 di 50
        </p>
    </nav>
);
moreStories.add("Total number", withDocs(Total, withInfo()(TotalComponent)));

const knobsStories = storiesOf("Componenti/Pager", module);
knobsStories.addDecorator(checkA11y);
knobsStories.addDecorator(withKnobs);

const EsempiInterattiviComponent = () => {
    const active = boolean("Attivo", false);
    const disabled = boolean("Disabilitato", false);
    const sizes = ["sm", "", "lg"];
    const size = select("Dimensioni", sizes, sizes[0]);

    let current = {};
    if (active) {
        current = {
            "aria-current": "page"
        };
    }
    return (
        <Pager size={size}>
            <PagerItem disabled={disabled}>
                <PagerLink {...current} previous href="#">
                    <i className="it-chevron-left" />
                </PagerLink>
            </PagerItem>
            <PagerItem disabled={disabled}>
                <PagerLink {...current} href="#">
                    1
                </PagerLink>
            </PagerItem>
            <PagerItem disabled={disabled}>
                <PagerLink {...current} next href="#">
                    <i className="it-chevron-right" />
                </PagerLink>
            </PagerItem>
        </Pager>
    );
};
knobsStories.add(
    "Esempi interattivi",
    withDocs(EsempiInterattivi, withInfo()(EsempiInterattiviComponent))
);