import { strict as assert } from 'assert'
import { tag } from '../tag'

describe('tag', () => {
    it('will generate markup tags', () => {
        assert.strictEqual(tag('div'), '<div></div>')
        assert.strictEqual(tag('div', { class: 'foo' }), '<div class="foo"></div>')
        assert.strictEqual(tag('div', { class: 'foo bar' }), '<div class="foo bar"></div>')
        assert.strictEqual(tag('div', { class: 'foo bar baz' }), '<div class="foo bar baz"></div>')
        assert.strictEqual(tag('div', { class: 'foo bar baz', id: 'bar' }), '<div class="foo bar baz" id="bar"></div>')
        assert.strictEqual(
            tag('div', { class: 'foo bar baz', id: 'bar', style: 'color: red;' }),
            '<div class="foo bar baz" id="bar" style="color: red;"></div>'
        )
        assert.strictEqual(
            tag('div', { class: 'foo bar baz', id: 'bar', style: 'color: red;', 'data-foo': 'bar' }),
            '<div class="foo bar baz" id="bar" style="color: red;" data-foo="bar"></div>'
        )
        assert.strictEqual(
            tag('div', { class: 'foo bar baz', id: 'bar', style: 'color: red;', 'data-foo': 'bar', 'data-bar': 'foo' }),
            '<div class="foo bar baz" id="bar" style="color: red;" data-foo="bar" data-bar="foo"></div>'
        )
    })
})
